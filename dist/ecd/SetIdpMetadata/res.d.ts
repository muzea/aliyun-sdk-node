export interface SetIdpMetadataResponse {
    /**
     * IdP元数据文件解析后获得的entityID值。
     * @example `http://test****.cn/adfs/services/trust`
     */
    IdpEntityId: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
}
