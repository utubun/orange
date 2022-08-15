const GeneSearch = ({ selected, setSelection }) => (
    <div>
      <h1>Gene search</h1>
      <form>
        <label>
          Select Business Category:
          <select 
            value = { selected }
            onChange={(event) => setSelection(event.target.value)}
          >
            <option value = 'All'>All</option>
            <option value = 'Adam'>Adam</option>
            <option value = 'Eve'>Eve</option>
          </select>
        </label>
        <input type = 'submit' value = 'Submit' />
      </form>
    </div>
)

export default GeneSearch;