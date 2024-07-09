export interface CreateADConnectorDirectoryResponse {
    /**
     * AD信任密码。
     * @example `82Tg****`
     */
    TrustPassword: string;
    /**
     * 请求ID。
     * @example `3FE99D5E-93A1-493F-B1CB-0ABD4D05BEFF`
     */
    RequestId: string;
    /**
     * AD类型的目录ID。
     * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****`
     */
    DirectoryId: string;
    /**
     * AD Connector的信息集合。
     */
    AdConnectors: {
        /**
         * 连接地址。
         * @example `127.0.XX.XX`
         */
        Address: string;
    }[];
}
