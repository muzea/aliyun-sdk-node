export interface GetRecordsByOuterBusinessIdResponse {
    /**
     * requestId
     * @example `0f1c45cd-3eee-4e60-b505-2e330b875***`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 双录记录id
         * @example `0f1c45cd-3eee-4e60-b505-2e330b875***`
         */
        Id: string;
        /**
         * 创建时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 业务检测流程名
         * @example `XX流程`
         */
        DetectProcessName: string;
        /**
         * 部门名
         * @example `XX部门`
         */
        DepartmentName: string;
        /**
         * 应用名
         * @example `XX应用`
         */
        AppName: string;
        /**
         * 视频地址
         * @example `http://oss.aliyuncs.com/1.mp4`
         */
        VideoUrl: string;
        /**
         * meta地址
         * @example `http://oss.aliyuncs.com/1.mp4.meta`
         */
        MetaUrl: string;
        /**
         * 结果地址
         * @example `http://oss.aliyuncs.com/1.mp4.json`
         */
        ResultUrl: string;
        /**
         * 录制时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        RecordAt: string;
        /**
         * 时长
         * @example `22`
         */
        Duration: number;
        /**
         * 检测状态
         * @example `COMPLETED`
         */
        Status: string;
        /**
         * mrtc房间id
         * @example `641981583353***`
         */
        RoomId: string;
        /**
         * 远程双录文件地址列表
         */
        RecordRoomList: {
            /**
             * 角色
             * @example `user`
             */
            Role: string;
            /**
             * 录制视频类型
             * @example `Mix`
             */
            RecordType: string;
            /**
             * 视频地址
             * @example `http://oss.aliyuncs.com/1.mp4`
             */
            RoomVideoUrl: string;
            /**
             * meta地址
             * @example `http://oss.aliyuncs.com/1.mp4.meta`
             */
            RoomMetaUrl: string;
            /**
             * 结果地址
             * @example `http://oss.aliyuncs.com/1.mp4.json`
             */
            RoomResultUrl: string;
            /**
             * 录制时间
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            RoomRecordAt: string;
            /**
             * 检测状态
             * @example `1`
             */
            RoomStatus: string;
            /**
             * mrtc录制ID
             * @example `record_65703154805715668342`
             */
            RtcRecordId: string;
            /**
             * 业务ID，用户自定义
             * @example `ads32efef43`
             */
            OuterBusinessId: string;
        }[];
        /**
         * 业务ID，用户自定义
         * @example `ads32efef43`
         */
        OuterBusinessId: string;
    }[];
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `A1899517-BB99-5D3E-A71B-97524DCB0***`
         */
        Field: string;
        /**
         * 错误信息
         * @example `-`
         */
        Message: string;
    }[];
}
