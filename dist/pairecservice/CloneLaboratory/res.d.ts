export interface CloneLaboratoryResponse {
    /**
     * Id of the request
     * @example `01D22D08-BA20-5F35-8302-99115F288220`
     */
    RequestId: string;
    /**
     * 克隆出的实验室的ID。
     * @example `3`
     */
    LaboratoryId: string;
}
