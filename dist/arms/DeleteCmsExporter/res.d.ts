export interface DeleteCmsExporterResponse {
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 返回结果信息。
     * @example `success`
     */
    Data: string;
}
