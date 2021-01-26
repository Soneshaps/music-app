{
  this.POSFields.map(function (posFields, POSFieldsId) {
    return (
      <tr>
        <td className="posheader" key={POSFieldsId} value={posFields.POSFieldsId}
          {posFields.POSFields} </td>
    <td>
          <select className="selectpicker">
            <option value="">Select Value</option>
            {this.headers.map(function (headers) {
              return (
                <option key={headers}>{headers}</option>
              );
            })}
          </select>
        </td>
      </tr>
    )
  })
}