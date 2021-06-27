function getUnique(arr, comp) {
  const unique = arr
    .map((e) => e[comp])

    .map((e, i, final) => final.lastIndexOf(e) === i && i)

    .filter((e) => arr[e])
    .map((e) => arr[e]);

  return unique;
}

function getObject(key, value, array) {
  let obj = null;
  if (array) {
    obj = array.find((item) => {
      return item[key] == value;
    });
  }
  return obj;
}

function getIdx(key, value, array) {
  if (array) {
    var ln = array.length;
    for (var i = 0; i < ln; i++) {
      if (array[i][key] == value) {
        return i;
      }
    }
  }
  return -1;
}

function filterAndSortData(state, payload) {
  let data = [];
  let numPlayers = +payload.alignment;
  if (state.pekaData && state.pekaData.length != 0) {
    data = state.pekaData.filter((item, i) => {
      return item.category == payload.btnid && item.numPlayers == numPlayers;
    });

    if (payload.sortAsc) {
      data = data.sort((a, b) => a.betValue - b.betValue);
    } else {
      data = data.sort((a, b) => b.betValue - a.betValue);
    }
  }
  return data;
}

export { getUnique, getObject, getIdx, filterAndSortData };
