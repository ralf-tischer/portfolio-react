import React, { useState } from 'react';

const Filter = ({ projects, onFilter }) => {
  const [filterType, setFilterType] = useState('tags');
  const [filterValue, setFilterValue] = useState('');

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilter = () => {
    let filteredProjects = projects;

    if (filterType === 'tags') {
      const tagFilters = filterValue.split(',').map((tag) => tag.trim());
      filteredProjects = projects.filter((project) =>
        tagFilters.every((tag) => project.tags.includes(tag))
      );
    } else if (filterType === 'id') {
      const idFilters = filterValue.split(',').map((id) => parseInt(id.trim()));
      const projectsMap = projects.reduce((acc, project) => {
        acc[project.id] = project;
        return acc;
      }, {});
      filteredProjects = idFilters.map((id) => projectsMap[id]).filter(Boolean);
    }

    onFilter(filteredProjects);
  };

  return (
    <div>
      <label>
        Filter by:
        <select value={filterType} onChange={handleFilterTypeChange}>
          <option value="tags">Tags</option>
          <option value="id">ID</option>
        </select>
      </label>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterValueChange}
        placeholder={`Enter ${filterType} to filter`}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;