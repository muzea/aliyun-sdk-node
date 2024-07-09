export interface DescribeLiveDomainStreamTranscodeDataResponse {
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    TranscodeDataList: {
        /**
         * 每个时间间隔的网络带宽数据。
         */
        TranscodeData: {
            /**
             * 转码类型。取值：
             * >  如果请求参数Split（分组键）为transcode_type时，此返回参数才生效。
             * - **H264STD**：H.264普通转码。
             * - **H264NBHD**：H.264窄带高清转码。
             * - **H265STD**：H.265普通转码。
             * - **AUDIO**：音频转码。
             * @example `H264STD`
             */
            TanscodeType: string;
            /**
             * 主播流域名。
             * > 如果请求参数Split（分组键）为domain时，此返回参数才生效。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 域名所属地域。 取值：
             * > 如果请求参数Split（分组键）为region时，此返回参数才生效。
             * - **cn-beijing**：北京。
             * - **cn-shanghai**：上海。
             * - **cn-qingdao**：青岛。
             * - **cn-shenzhen**：深圳。
             * - **ap-northeast-1**：日本。
             * - **ap-south-1**：印度。
             * - **ap-southeast-1**：新加坡。
             * - **ap-southeast-5**：印尼。
             * - **eu-central-1**：德国。
             * @example `cn-beijing`
             */
            Region: string;
            /**
             * 时长。单位：分钟。
             * @example `2000`
             */
            Duration: number;
            /**
             * 时间片起始时刻。
             * @example `2017-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 帧率。
             * > 如果请求参数Split（分组键）为fps时，此返回参数才生效。
             * @example `normal`
             */
            Fps: string;
            /**
             * 分辨率。取值：
             * > 如果请求参数Split（分组键）为resolution时，此返回参数才生效。
             * - **2K**
             * - **4K**
             * - **LD**：流畅。
             * - **SD**：标清。
             * - **HD**：高清。
             * - **def**：音频。
             * @example `HD`
             */
            Resolution: string;
        }[];
    };
}
