const styleStr = css`
td.status.row-cell {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}

.task-card {
  width: unset;
}
`;
const style = document.createElement('style');
style.textContent = styleStr;
document.head.appendChild(style);
