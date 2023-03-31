var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var output = document.getElementById("output");
function handleGetAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/v1/users")];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("No data from server on client get all users");
                    console.log(data);
                    output.innerHTML = JSON.stringify(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.messasge);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetUserById(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    id = event.target.elements.userByIdInput.value;
                    return [4 /*yield*/, axios.get("/api/v1/users/" + id)];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    output.innerHTML = JSON.stringify(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddNewUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, id, address, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    firstName = event.target.elements.firstNameInput.value;
                    lastName = event.target.elements.lastNameInput.value;
                    age = event.target.elements.ageInput.value;
                    id = event.target.elements.idInput.value;
                    address = event.target.elements.addressInput.value;
                    return [4 /*yield*/, axios.post("/api/v1/users", { firstName: firstName, lastName: lastName, age: age, id: id, address: address })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    output.innerHTML = JSON.stringify(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3.messasge);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteUserByName(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    firstName = event.target.elements.deleteUserInput.value;
                    return [4 /*yield*/, axios["delete"]("/api/v1/users/" + firstName)];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    output.innerHTML = JSON.stringify(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4.messasge);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var newFirstName, newLastName, newAge, newId, newAddress, idUser, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    newFirstName = event.target.elements.newFirstName.value;
                    newLastName = event.target.elements.newLastName.value;
                    newAge = event.target.elements.newAge.value;
                    newId = event.target.elements.newId.value;
                    newAddress = event.target.elements.newAddress.value;
                    idUser = event.target.elements.userIdInput.value;
                    return [4 /*yield*/, axios.put("/api/v1/users/" + idUser, { newFirstName: newFirstName, newLastName: newLastName, newAge: newAge, newId: newId, newAddress: newAddress })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    output.innerHTML = JSON.stringify(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5.messasge);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// async function handleUpdateUser(event) {
//   try {
//     event.preventDefault()
//     const newFirstName = event.target.elements.newNameInput.value
//     const idUser = event.target.elements.userIdInput.value
//     //@ts-ignore
//     const { data } = await axios.patch(`/api/v1/users/${idUser}`, {newFirstName})
//     console.log(data)
//   } catch (error) {
//     console.error(error.messasge)
//   }
// }
