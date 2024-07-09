export interface GetSecretAsrDetailResponse {
    /**
     * 错误码。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * ASR详情实体类信息。
     * @example `{"bizDuration":10944,"businessId":"435ee78c7a019650@!FC100000074672458@!20200615225802","businessKey":"JCGTncltuNaolegJ","code":"21050000","msg":"SUCCESS","requestId":"8d2329d407a83447a83be441681f4872ac74nE","sentences":[{"beginTime":1020,"channelId":0,"emotionValue":"5.7","endTime":1770,"silenceDuration":"0","speechRate":"80","text":"喂"}],"success":true,"type":"asrResult"}`
     */
    Data: {
        /**
         * 请求ID。
         * @example `8d2329d407a83447a83be441681f4872ac74nE`
         */
        RequestId: string;
        /**
         * 业务流程的ID。
         * @example `435ee78c7a******@!FC100000074******@!2020061522****`
         */
        BusinessId: string;
        /**
         * 业务关键字。
         * @example `JCGTncltuNao****`
         */
        BusinessKey: string;
        /**
         * 状态码。21050000表示请求成功。
         * @example `21050000`
         */
        Code: string;
        /**
         * 描述信息。
         * @example `SUCCESS`
         */
        Msg: string;
        /**
         * 识别的音频文件总时长，单位：毫秒。
         * @example `10944`
         */
        BizDuration: number;
        /**
         * 类型。
         * @example `asrResult`
         */
        Type: string;
        /**
         * ASR识别结果。
         */
        Sentences: {
            /**
             * 该句的结束时间偏移，单位：毫秒。
             * @example `1770`
             */
            EndTime: number;
            /**
             * 本句和上一句之间的静音时长，单位：秒。
             * @example `0`
             */
            SilenceDuration: number;
            /**
             * 该句的起始时间偏移，单位：毫秒。
             * @example `1020`
             */
            BeginTime: number;
            /**
             * 该句的识别文本结果。
             * @example `您好`
             */
            Text: string;
            /**
             * 该句所属音轨ID。
             * @example `0`
             */
            ChannelId: number;
            /**
             * 本句的平均语速，单位为每分钟字数。
             * @example `80`
             */
            SpeechRate: number;
            /**
             * 情绪能量值，取值：**1~10**，值越高情绪越强烈。
             * @example `5.7`
             */
            EmotionValue: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
}
