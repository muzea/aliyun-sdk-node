export interface RebootInstancesRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 轻量应用服务器的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]`
     */
    "InstanceIds": string;
    /**
     * 是否强制重启。取值范围：
     * -   true：强制重启。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * -   false：正常重启。
     * 默认值：false
     * @example `false`
     */
    "ForceReboot"?: boolean;
}
