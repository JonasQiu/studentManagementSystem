import Axios from "axios";
import URLs from "./URLs";

const Request = Axios.create({
    baseURL: URLs.baseURL,
    params: {
        appkey: "joans_1576073515753"
    }
})

function stundentSearch(option) {
    return Request({
        url: URLs.searchStu,
        params: {
            ...option
        }
    })
}

function findByPage(page, size) {
    return Request({
        url: URLs.findByPage,
        params: {
            page,
            size
        }
    })
}

function studentDelete(sNo) {
    return Request({
        url: URLs.deleteStu,
        params: {
            sNo
        }
    })
}

function studentUpdata(option) {
    return Request({
        url: URLs.updateStu,
        params: {
            ...option
        }
    })
}

function studentAdd(option) {
    return Request({
        url: URLs.addStu,
        params: {
            ...option
        }
    })
}

function findeAllStudent() {
    return Request({
        url: URLs.findeAllStu
    })
}

export default {
    stundentSearch,
    findByPage,
    studentDelete,
    studentUpdata,
    studentAdd,
    findeAllStudent
}