export interface AddUninstallClientsByUuidsRequest {
    /**
     * 请求源ip。无需填写，系统自动获取。
     * @example `1.2.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 指定要解除绑定的非阿里服务器的UUID。存在多个UUID时使用英文逗号（,）分隔。
     * > 调用[DescribeCloudCenterInstances](~~141932~~)接口获取该参数。
     * @example `inet-183707ae-3bdf-4db0-b771-3e9962bf****,inet-49dceccc-4f01-469b-8411-2416ea12****`
     */
    "Uuids": string;
    /**
     * 服务器所在的地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 方法名默认值init。
     * @example `init`
     */
    "CallMethod"?: string;
    /**
     * 反馈信息。
     * @example `reinstall`
     */
    "Feedback"?: string;
}
