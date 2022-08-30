const GeneSearch = ({ selected, setSelection }) => (
    <div>
      <h1>Gene search</h1>
      <form>
        <label>
          Select Gene:
          <select 
            value = { selected }
            onChange={(event) => setSelection(event.target.value)}
          >
            <option value = ''>All</option>
            <option value = 'gyrB'>gyrB</option>
            <option value = 'recF'>recF</option>
          </select>
        </label>
        <input type = 'submit' value = 'Submit' />
      </form>
    </div>
)

export default GeneSearch;