export interface DeleteAttestorRequest {
    /**
     * 访问源的IP地址。
     * @example `221.214.XXX.XX`
     */
    "SourceIp"?: string;
    /**
     * 证明者名称。
     * @example `attestor`
     */
    "Name"?: string;
}
