export interface CreateAttestorRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 证明者名称。
     * @example `attestor-auto-ad5316`
     */
    "Name"?: string;
    /**
     * KMS秘钥所在区域ID。
     * @example `cn-hangzhou`
     */
    "KeyRegionId"?: string;
    /**
     * KMS秘钥ID。
     * @example `2e81355b-f8e7-4090-8082-a8f8124a****`
     */
    "KeyId"?: string;
    /**
     * KMS秘钥版本ID。
     * @example `8d7c9c91-57ce-4cf4-a959-1e700e13****`
     */
    "KeyVersionId"?: string;
    /**
     * 备注。
     * @example `attestor`
     */
    "Remark"?: string;
}
