let items = ['Python', 'Javascript', 'Java', 'PHP', 'Ruby'];

function updateList() {
    let list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        list.innerHTML += '<li>' + items[i] + '</li>';
    }
}

function handleSubmit() {
    let action = document.getElementById('actionType').value;
    let input = document.getElementById('dataInput').value;
    let message = document.getElementById('message');

    if (input == '') {
        alert('Silakan isi data');
        return;
    }

    if (action == 'add') {
        let newItems = [];
        for (let i = 0; i < items.length; i++) {
            newItems[i] = items[i];
        }
        newItems[newItems.length] = input;
        items = newItems;
        message.innerHTML = '<div>anda berhasil tambah data</div>';
    } else {
        let newItems = [];
        let found = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i] == input && found == false) {
                found = true;
                continue;
            }
            newItems[newItems.length] = items[i];
        }
        items = newItems;

        if (found) {
            message.innerHTML = '<div>berhasil menghapus data</div>';
        } else {
            message.innerHTML = '<div>“data yang ingin anda hapus tidak ada</div>';
        }
    }

    updateList();
    document.getElementById('dataInput').value = '';
}
