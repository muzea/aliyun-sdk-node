import { RegisterDeviceRequest } from "./RegisterDevice/req";
import { RegisterDeviceResponse } from "./RegisterDevice/res";

interface MOGUAN_SDK {
    /**
     * 设备端SDK注册授权服务。
     */
    RegisterDevice(query: RegisterDeviceRequest): Promise<RegisterDeviceResponse>;
}
export default MOGUAN_SDK;
