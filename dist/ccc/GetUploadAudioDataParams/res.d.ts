export interface GetUploadAudioDataParamsResponse {
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID,可用于接口的日志查询
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 离线质检音频文件相关参数
         * @example `{
          "autoSplit": 1,
          "appKey": ****,
          "sampleRate": 8,
          "callList": [
            {
              "callId": "job-46686139435843****",
              "validTimes": [
                {
                  "begin_time": 0,
                  "end_time": 30720,
                  "speaker_id": "张**"
                }
              ],
              "resolveType": "ali-ACC",
              "instance": "c****",
              "callee": "153****",
              "accUid": 105****967,
              "callStartTime": 1704870035381,
              "customerServiceName": "张**",
              "tid": "2ccd8732-62ed-****b9",
              "callType": 1,
              "skillGroupUUID": "skg-default@c****",
              "caller": "2023****",
              "customerServicePhone": "80****54",
              "channels": [
                {
                  "speaker_id": "张**",
                  "channel_key": "ch-user-153****-80****54-1704870030317-job-46686139435843****"
                }
              ],
              "sourceType": 1,
              "channelKey": "ch-user-153****-80****54-1704870030317-job-46686139435843****",
              "skillGroupName": "金****",
              "voiceFileUrl": "https://ccc-***.oss-cn-****.aliyuncs.com/ccc-****​/c****​/2024/01/job-46686139435843****.mkv?Expires=****&OSSAccessKeyId=****&Signature=****",
              "skillGroupId": 0,
              "customerServiceId": 203242802****
            }
          ]
        }`
         */
        ParamsStr: string;
    };
}
