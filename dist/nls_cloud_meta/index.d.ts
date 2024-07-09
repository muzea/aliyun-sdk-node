import { CreateTokenRequest } from "./CreateToken/req";
import { CreateTokenResponse } from "./CreateToken/res";

interface NLS_CLOUD_META {
    /**
     * 获取智能语音交互的token。
     */
    CreateToken(query: CreateTokenRequest): Promise<CreateTokenResponse>;
}
export default NLS_CLOUD_META;
