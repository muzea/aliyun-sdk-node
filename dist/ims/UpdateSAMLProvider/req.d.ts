export interface UpdateSAMLProviderRequest {
    /**
     * 需要修改的身份提供商名称。
     * @example `test-provider`
     */
    "SAMLProviderName": string;
    /**
     * 新的备注。
     * > `NewDescription`与`NewEncodedSAMLMetadataDocument`参数必须至少填写一个。
     * @example `This is a new provider.`
     */
    "NewDescription"?: string;
    /**
     * 新的元数据文档。
     * > `NewDescription`与`NewEncodedSAMLMetadataDocument`参数必须至少填写一个。
     * @example `PD94bWwgdmVy****`
     */
    "NewEncodedSAMLMetadataDocument"?: string;
}
