export interface ListMultiChannelRecordingsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B19CD719-9F65-56A6-8B79-DA4282EA4797`
     */
    RequestId: string;
    /**
     * 录音列表。
     */
    Data: {
        /**
         * 录音文件名称。
         * @example `job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv`
         */
        FileName: string;
        /**
         * 录音文件的OSS下载地址，注意下载地址的过期时间，下载地址的有效期为1天。
         * @example `https://ccc-v2-shanghai.oss-cn-shanghai.aliyuncs.com/ccc-test/job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.mkv?Expires=1657014031&OSSAccessKeyId=****&Signature=****`
         */
        FileUrl: string;
        /**
         * 坐席ID。
         * @example `agent@ccc-test`
         */
        AgentId: string;
        /**
         * 坐席名称。
         * @example `坐席小王`
         */
        AgentName: string;
        /**
         * 录音开始时间，格式为Unix时间戳，单位毫秒。
         * @example `1656926518491`
         */
        StartTime: number;
        /**
         * 通话ID。
         * @example `job-25920271311543****`
         */
        ContactId: string;
        /**
         * 录音时长，单位毫秒。
         * @example `56321`
         */
        Duration: string;
        /**
         * 技能组ID。
         * @example `skillgroup@ccc-test`
         */
        SkillGroupId: string;
        /**
         * 坐席对应的RAM账号ID。
         * @example `22807673106369****`
         */
        RamId: string;
        /**
         * 坐席话务通道ID。
         * @example `ch-user-8526899****-8602****-1656926504363-job-25920271311543****`
         */
        AgentChannelId: string;
        /**
         * 通话保持的时间片段列表。
         */
        HoldTimeSegments: {
            /**
             * 通话保持的开始时间，单位是毫秒。
             * @example `1673255098049`
             */
            StartTime: number;
            /**
             * 通话保持的结束时间，单位是毫秒。
             * @example `1687860143925`
             */
            EndTime: number;
        }[];
    }[];
}
