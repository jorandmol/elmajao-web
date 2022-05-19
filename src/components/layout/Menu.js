import './Menu.css';

function Menu({ size }) {
  const options = [
    { name: 'Inicio', icon: '' },
    { name: 'Productos', icon: '' }
  ];
  const colSize = 'col-md-' + size;
  const optionClass = 'row py-2';
  return (
    <menu className={colSize}>
      <div className="card">
        <div className="card-header text-center bg-white">
          <h5 class="mb-0">Menú</h5>
        </div>
        <div className="card-body py-0">
          {options.map(({ name, icon }, i) => {
            let optClassName = i === options.length - 1 ? optionClass : optionClass + ' border-bottom';
            return (
              <div className={optClassName}>
                <span>{name}</span>
              </div>
            )}
          )}
        </div>
      </div>
    </menu>
  );
}

export default Menu;