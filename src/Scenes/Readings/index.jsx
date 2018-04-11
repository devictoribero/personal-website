import React from 'react';

const Readings = ({ ApplicationData }) => {
  return (
    <section className="vrg-scene readings">
      <div className="vrg-scene__positioner">
        <h1 className="vrg-scene__title">Books & readings</h1>

        {ApplicationData.books_and_readings.map((dataByClassification, i) => {
          return(
            <div key={i} className={`books books--${dataByClassification.classification}`}>
              <h2 className='books__title'>
                <span>{dataByClassification.classification}</span>
              </h2>

              {dataByClassification.data.map((dataByTypeOfReading, index) => {
                return (
                  <MenuByTypeOfReading
                    type={dataByTypeOfReading.type}
                    data={dataByTypeOfReading.data}
                    key={index}
                  />
                );
              })}
            </div>
          )
        }
        )}
      </div>
    </section>
  );
};
export default Readings;

const MenuByTypeOfReading = ({type, data}) => {
  return (
    <div className='books_list-wrapper'>
      <h3 className='books__subtitle'>{type}</h3>
      <ul className="books-list">
        {data.map((readingItem, index) => {
          return <ReadingItem item={readingItem} key={index} />;
        })}
      </ul>
    </div>
  );
}
const ReadingItem = ({item}) => {
  return(
    <li className="books-item">
      <Reading reading={item.displayName} link={item.link} />
      <AuthorReading author={item.author} />
    </li>
  );
};

const Reading = ({reading, link}) => {
  if(link) {
    return <span className="book__item-name"><a href={link}>{reading}</a></span>;
  }
  return <span className="book__item-name">{reading}</span>;
};

const AuthorReading = ({author}) => {
  if(!author) { return ''; }
  return <span className="book__item-author">{author}</span>;
};
