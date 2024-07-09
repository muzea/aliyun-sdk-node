export interface ListScriptRecordingResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC
    `
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 每页显示的条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 页号
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总计个数
     * @example `99`
     */
    TotalCount: number;
    /**
     * 录音列表
     */
    ScriptRecordings: {
        /**
         * 录音内容
         * @example `您好！`
         */
        RecordingContent: string;
        /**
         * 录音状态
         * @example `8`
         */
        State: number;
        /**
         * 存储UUID
         * @example `393674ed-3b5d-db44-0fda-615d05210178
        `
         */
        StorageUuid: string;
        /**
         * 状态扩展
         * @example `无`
         */
        StateExtend: string;
        /**
         * 所属实例id
         * @example `ff0fb845-9f90-46d3-9716-d36b8a1e753a`
         */
        InstanceId: string;
        /**
         * 更新时间
         * @example `1654601332000`
         */
        GmtModified: number;
        /**
         * 录音所属场景id
         * @example `6019b692-fd9e-4adb-8877-cef6a297b234`
         */
        ScriptId: string;
        /**
         * 录音唯一id
         * @example `0a77386e-6402-8d23-4adf-6ec13b3f404d
        `
         */
        Uuid: string;
        /**
         * 录音上传时间
         * @example `1654601332000`
         */
        GmtUpload: number;
        /**
         * 录音时长，单位秒。
         * @example `10`
         */
        RecordingDuration: number;
        /**
         * 录音名称
         * @example `hello.wav`
         */
        RecordingName: string;
        /**
         * 创建时间。
         * @example `2022-07-11T07:51:49.000+0000`
         */
        GmtCreate: number;
        /**
         * 录音文件在实例下的id。
         * @example `1`
         */
        InnerId: string;
        RefId: string;
    }[];
}
