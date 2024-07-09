export interface ListMonoRecordingsResponse {
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
     * @example `E836EF2A-EDAE-5310-8921-F983C967D42D`
     */
    RequestId: string;
    /**
     * 录音信息列表。
     */
    Data: {
        /**
         * 录音文件名称。
         * @example `job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.wav`
         */
        FileName: string;
        /**
         * 录音文件的OSS下载地址，注意下载地址的过期时间，下载地址的有效期为1天。
         * @example `https://ccc-v2-shanghai.oss-cn-shanghai.aliyuncs.com/ccc-test/job-25920271311543****-798f1e90-1f82-42da-914c-46580c8f4c85-1656926518491.wav?Expires=1657014031&OSSAccessKeyId=****&Signature=****`
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
         * @example `1620259200000`
         */
        StartTime: string;
        /**
         * 通话ID。
         * @example `job-25920271311543****`
         */
        ContactId: string;
        /**
         * 录音时长，单位毫秒。
         * @example `5903871`
         */
        Duration: string;
        /**
         * 技能组ID。
         * @example `skillgroup@ccc-test`
         */
        SkillGroupId: string;
        /**
         * 坐席对应的RAM账号ID。
         * @example `26972543893791****`
         */
        RamId: string;
    }[];
}
