import { ExecuteRequestRequest } from "./ExecuteRequest/req";
import { ExecuteRequestResponse } from "./ExecuteRequest/res";

interface SAF {
    ExecuteRequest(query: ExecuteRequestRequest): Promise<ExecuteRequestResponse>;
}
export default SAF;
