export interface AttachKeyPairRequest {
    /**
     * ADB密钥对的ID。
     * @example `kp-6v2q33ae4tw3a****`
     */
    "KeyPairId": string;
    /**
     * 云手机实例ID列表，最多支持50个实例。
     */
    "InstanceIds"?: string[];
}
