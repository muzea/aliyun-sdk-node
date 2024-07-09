import { InvokeDiagnosisRequest } from "./InvokeDiagnosis/req";
import { InvokeDiagnosisResponse } from "./InvokeDiagnosis/res";
import { AuthDiagnosisRequest } from "./AuthDiagnosis/req";
import { AuthDiagnosisResponse } from "./AuthDiagnosis/res";
import { GetDiagnosisResultRequest } from "./GetDiagnosisResult/req";
import { GetDiagnosisResultResponse } from "./GetDiagnosisResult/res";
import { GenerateCopilotResponseRequest } from "./GenerateCopilotResponse/req";
import { GenerateCopilotResponseResponse } from "./GenerateCopilotResponse/res";

interface SYSOM {
    /**
     * 对指定的 ECS 实例发起诊断。
     */
    InvokeDiagnosis(query: InvokeDiagnosisRequest): Promise<InvokeDiagnosisResponse>;
    /**
     * 本接口用于授权 SysOM 对本账号下的 ECS 实例进行诊断，只有在调用本接口对特定的ECS进行授权后，才可以调用 InvokeDiagnosis 接口对其发起诊断。
     */
    AuthDiagnosis(query: AuthDiagnosisRequest): Promise<AuthDiagnosisResponse>;
    /**
     * 获取诊断结果。
     */
    GetDiagnosisResult(query: GetDiagnosisResultRequest): Promise<GetDiagnosisResultResponse>;
    /**
     * 本接口用于请求os-copilot服务
     */
    GenerateCopilotResponse(query: GenerateCopilotResponseRequest): Promise<GenerateCopilotResponseResponse>;
}
export default SYSOM;
