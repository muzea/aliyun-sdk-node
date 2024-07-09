export interface CreateMigrationJobResponse {
    /**
     * 请求ID。
     * @example `C166D79D-436B-45F0-B5A5-25E1959F****`
     */
    RequestId: string;
    /**
     * 数据迁移实例ID。
     * @example `dtsi8911td9233****`
     */
    MigrationJobId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError `
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
