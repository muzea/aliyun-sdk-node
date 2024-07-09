import { ExecuteRequestRequest } from "./ExecuteRequest/req";
import { ExecuteRequestResponse } from "./ExecuteRequest/res";
import { ExecuteRequestMLRequest } from "./ExecuteRequestML/req";
import { ExecuteRequestMLResponse } from "./ExecuteRequestML/res";
import { ExecuteRequestSGRequest } from "./ExecuteRequestSG/req";
import { ExecuteRequestSGResponse } from "./ExecuteRequestSG/res";
import { RequestDecisionRequest } from "./RequestDecision/req";
import { RequestDecisionResponse } from "./RequestDecision/res";

interface SAF {
    ExecuteRequest(query: ExecuteRequestRequest): Promise<ExecuteRequestResponse>;
    ExecuteRequestML(query: ExecuteRequestMLRequest): Promise<ExecuteRequestMLResponse>;
    ExecuteRequestSG(query: ExecuteRequestSGRequest): Promise<ExecuteRequestSGResponse>;
    /**
     * 调用决策引擎接口
     */
    RequestDecision(query: RequestDecisionRequest): Promise<RequestDecisionResponse>;
}
export default SAF;
