export interface GetCloudMetricProfilingResponse {
    /**
     * 请求ID。
     * @example `0DD6F715-85EE-4EA6-BDC4-48A75B719068`
     */
    RequestId: string;
    SvgUrls: {
        /**
         * 性能剖析结果列表。
         */
        SvgInfo: {
            /**
             * SVG文件类型。
             * @example `file`
             */
            Type: string;
            /**
             * SVG文件存储在OSS的URL。
             * @example `https://cloudmetrics-****-hz.oss-cn-hangzhou.aliyuncs.com/112****​/ehpc-hz-faRavb****njuik%Oxlftyhujmi0Y****`
             */
            Url: string;
            /**
             * SVG文件名称。
             * @example `ehpc-hz-faRavbPf6b_i-bdrftgyh890654****_21687_2019-09-09-02-37-40.bottomup.svg`
             */
            Name: string;
            /**
             * SVG文件大小。单位为字节（Byte）。
             * @example `648`
             */
            Size: number;
        }[];
    };
}
