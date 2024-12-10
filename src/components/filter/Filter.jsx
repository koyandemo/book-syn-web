import { A } from 'solid-start'
import { createEffect, createSignal } from 'solid-js'
import { bookCategories } from '../../utils/initData'
import TextComponent from '../text/TextComponent'
import './Filter.css'

const Filter = (props) => {
  const {
    filterData,
    setFilterData,
    componentType,
    fReset,
    isAuthorComponent = false,
  } = props
  const [filterKey, setFilterKey] = createSignal('s-asc')
  const [filterCategory, setFilterCategory] = createSignal('')

  createEffect(() => {
    setFilterCategory(filterData.genre)
  })

  return (
    <div class='filter'>
      {/* <div class='filter-title-warp'>
        <TextComponent size='lg' label='Sorting and Filter' />
      </div> */}
      <div class='filter-container'>
        <div id='alphabet' class='filter-card'>
          <TextComponent
            size='sm'
            label='Filter and Sorting'
            isBorderB={true}
            classes='filter-card-title'
          />
          <div
            className={`filter-card-radio ${
              filterKey() === 's-asc' ? 'filter-card-radio-active' : ''
            }`}
            onclick={() => {
              setFilterData((data) => ({
                ...data,
                sorting: 'asc',
                date: '',
                key: 's-asc',
              }))
              setFilterKey('s-asc')
            }}
          >
            <TextComponent
              size='xs'
              transform='unset'
              label='Alphabet ( asc )'
              classes='pb-unset pointer'
            />
          </div>
          <div
            className={`filter-card-radio ${
              filterKey() === 's-desc' ? 'filter-card-radio-active' : ''
            }`}
            onclick={() => {
              setFilterData((data) => ({
                ...data,
                sorting: 'desc',
                date: '',
                key: 's-desc',
              }))
              setFilterKey('s-desc')
            }}
          >
            <TextComponent
              size='xs'
              transform='unset'
              label='Alphabet ( desc )'
              classes='pb-unset pointer'
            />
          </div>
          {/* <div
            className={`filter-card-radio ${
              filterKey() === 'r-asc' ? 'filter-card-radio-active' : ''
            }`}
            onclick={() => {
              setFilterData((data) => ({
                ...data,
                sorting: '',
                date: 'asc',
                key: 'r-asc',
              }))
              setFilterKey('r-asc')
            }}
          >
            <TextComponent
              size='xs'
              transform='unset'
              label={`${
                componentType === 'book' ? ' Release Date ' : 'Birthday Date'
              } ( asc )`}
              classes='pb-unset'
            />
          </div> */}
          {/* <div
            className={`filter-card-radio ${
              filterKey() === 'r-desc' ? 'filter-card-radio-active' : ''
            }`}
            onclick={() => {
              setFilterData((data) => ({
                ...data,
                sorting: '',
                date: 'desc',
                key: 'r-desc',
              }))
              setFilterKey('r-desc')
            }}
          >
            <TextComponent
              size='xs'
              transform='unset'
              label={`${
                componentType === 'book' ? ' Release Date ' : 'Birthday Date'
              } ( desc )`}
              classes='pb-unset'
            />
          </div> */}
        </div>
        {!isAuthorComponent && (
          <div id='categories' class='filter-card'>
            <TextComponent
              size='sm'
              label='Categories'
              classes='filter-card-title'
              isBorderB={true}
            />
            <div class='filter-card-items'>
              {bookCategories.map((category) => (
                <A href={`/books?genre=${category}`}>
                  <div
                    className={`filter-card-radio ${
                      filterCategory() === category
                        ? 'filter-card-radio-active'
                        : ''
                    }`}
                    onclick={() => {
                      setFilterData({
                        ...filterData,
                        page: 1,
                        genre: category,
                      })
                      setFilterCategory(category)
                    }}
                  >
                    <TextComponent
                      size='xs'
                      transform='unset'
                      label={category}
                      classes='pb-unset whiteSpace-pre'
                    />
                  </div>
                </A>
              ))}
            </div>
          </div>
        )}
        {!isAuthorComponent && (
          <button
            className={`bs-btn ${
              filterCategory() === '' ? 'btn-disabled' : ''
            }`}
            onclick={() => {
              fReset()
              setFilterCategory('')
            }}
          >
            Reset All{' '}
          </button>
        )}
        {/* <div id='rating-range' class='filter-card'>
          <TextComponent size='sm' label='Ratings' isBorderB={true} />
          <div class='rating-range'>
            <input
              type='range'
              value={5}
              max={10}
              min={0}
              id='fader'
              list='ratingsettings'
            />
            <datalist id='ratingsettings'>
              <option value={0} label='0'></option>
              <option value={1}></option>
              <option value={2}></option>
              <option value={3}></option>
              <option value={4}></option>
              <option value={5} label='5'></option>
              <option value={6}></option>
              <option value={7}></option>
              <option value={8}></option>
              <option value={9}></option>
              <option value={10} label='10'></option>
            </datalist>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Filter

{
  /* <div id='release-date' class='filter-card'>
          <TextComponent size='md' label='Release Dates' />
          <div className='filter-card-radio'>
            <input
              type={'radio'}
              checked={true}
              name='r-date'
              value='a-z'
              onclick={() => {
                setFilterData({ ...filterData, release_date: 'asc' })
              }}
            ></input>
            <TextComponent
              size='sm'
              transform='lowercase'
              label='asc'
              classes='pb-unset'
            />
          </div>
          <div className='filter-card-radio'>
            <input
              type={'radio'}
              checked={false}
              name='r-date'
              value='z-a'
              onclick={() => {
                setFilterData({ ...filterData, release_date: 'desc' })
              }}
            ></input>
            <TextComponent
              size='sm'
              transform='lowercase'
              label='desc'
              classes='pb-unset'
            />
          </div>
        </div> */
}
