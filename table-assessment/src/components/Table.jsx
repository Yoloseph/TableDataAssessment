function Table() {
  return (
    <div>
      <h1>Table </h1>
      <table id="data-table">
        <thead>
            <tr>
                <th></th>
                <th colspan="3">Articles</th>
                <th colspan="2">Region</th>
                <th colspan="2">Legal Entity</th>
                <th>Version</th>
                <th>Currency</th>
                <th>Measure</th>
            </tr>
            {/* <tr id="column-headers">
                <th></th>
                <th class="expandable" data-level="1"><span class="collapse-icon" onclick="toggleColumn(1)">&#9654;</span> All Articles</th>
                <th class="hidden indent" data-level="2">Bikes</th>
                <th class="hidden indent" data-level="2">Motorbikes</th>
                <th class="expandable" data-level="1"><span class="collapse-icon" onclick="toggleColumn(4)">&#9654;</span> Europe</th>
                <th class="hidden indent" data-level="2">Great Britain</th>
                <th class="expandable" data-level="1"><span class="collapse-icon" onclick="toggleColumn(7)">&#9654;</span> All Entities</th>
                <th class="hidden indent" data-level="2">11</th>
                <th>Actual</th>
                <th>LC</th>
                <th>Units</th>
            </tr> */}
        </thead>
        <tbody id="table-body">
            <tr data-row-level="1">
                <td class="expandable" data-level="1"><span class="collapse-icon" onclick="toggleRow(1)">&#9654;</span> Germany</td>
                <td>276521</td>
                <td>120000</td>
                <td>98000</td>
                <td>430000</td>
                <td>310000</td>
                <td>76000</td>
                <td>67000</td>
                <td>340000</td>
                <td>250000</td>
                <td>89000</td>
            </tr>
            <tr data-row-level="2" class="hidden">
                <td class="indent">Berlin</td>
                <td>12345</td>
                <td>3456</td>
                <td>5678</td>
                <td>91011</td>
                <td>11213</td>
                <td>1415</td>
                <td>1617</td>
                <td>1819</td>
                <td>2021</td>
                <td>2223</td>
            </tr>
        </tbody>
    </table>

    </div>
  );
}

export default Table;
