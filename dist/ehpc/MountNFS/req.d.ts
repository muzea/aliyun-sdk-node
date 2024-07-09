export interface MountNFSRequest {
    /**
     * 可视化实例ID。
     * @example `i-bp1bzqq4rremun****`
     */
    "InstanceId": string;
    /**
     * 挂载点地址。
     * @example `\\0de-jup****.cn-hangzhou.nas.aliyuncs.com\`
     */
    "NfsDir": string;
    /**
     * 本地挂载目录。
     * @example `Z:`
     */
    "MountDir": string;
    /**
     * 协议类型。取值范围：
     * - nfs
     * - smb
     * @example `nfs`
     */
    "ProtocolType"?: string;
    /**
     * 远端挂载地址。
     * @example `/test`
     */
    "RemoteDir"?: string;
}
