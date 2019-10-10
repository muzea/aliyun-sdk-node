import { GetOpLogRequest } from "./GetOpLog/req";
import { GetOpLogResponse } from "./GetOpLog/res";
import { RegisterInstanceRequest } from "./RegisterInstance/req";
import { RegisterInstanceResponse } from "./RegisterInstance/res";
import { RegisterUserRequest } from "./RegisterUser/req";
import { RegisterUserResponse } from "./RegisterUser/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DisableUserRequest } from "./DisableUser/req";
import { DisableUserResponse } from "./DisableUser/res";
import { EnableUserRequest } from "./EnableUser/req";
import { EnableUserResponse } from "./EnableUser/res";

interface DMS_ENTERPRISE {
    GetOpLog(query: GetOpLogRequest): Promise<GetOpLogResponse>;
    RegisterInstance(query: RegisterInstanceRequest): Promise<RegisterInstanceResponse>;
    RegisterUser(query: RegisterUserRequest): Promise<RegisterUserResponse>;
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    DisableUser(query: DisableUserRequest): Promise<DisableUserResponse>;
    EnableUser(query: EnableUserRequest): Promise<EnableUserResponse>;
}
export default DMS_ENTERPRISE;
