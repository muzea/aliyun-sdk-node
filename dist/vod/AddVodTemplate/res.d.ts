export interface AddVodTemplateResponse {
    /**
     * 截图或动图模板ID。
     * 可作为[SubmitSnapshotJob](~~SubmitSnapshotJob~~)或[SubmitDynamicImageJob](~~SubmitDynamicImageJob~~)接口的请求参数，发起截图或动图处理。
     * @example `f5b228fe6930e*****0d6bf55bd87789`
     */
    VodTemplateId: string;
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
}
