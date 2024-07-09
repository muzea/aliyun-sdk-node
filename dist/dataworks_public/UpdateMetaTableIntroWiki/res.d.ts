export interface UpdateMetaTableIntroWikiResponse {
    /**
     * 表的更新结果。
     * @example `true`
     */
    UpdateResult: boolean;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `abcde`
     */
    RequestId: string;
}
