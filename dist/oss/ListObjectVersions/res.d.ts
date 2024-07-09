export interface ListObjectVersionsResponse {
    /**
     * 保存GetBucketVersions请求结果的容器。
     */
    ListVersionsResult: {
        /**
         * Bucket名称。
         * @example `example-bucket`
         */
        Name: string;
        /**
         * 本次查询结果的前缀。
         * @example `logs/`
         */
        Prefix: string;
        /**
         * 标识此次GetBucketVersions的起点Object。
         * @example `abc`
         */
        KeyMarker: string;
        /**
         * 与KeyMarker参数一同使用，以指定ListObjectVersions（GetBucketVersions）的起点。
         * @example `CAEQGBiBgIC_jq7P9xYiIDRiZWJkNjY2Y2Q4NDQ5ZTI5ZGE5ODIxMTIyZThl****`
         */
        VersionIdMarker: string;
        /**
         * 响应请求内返回结果的最大数目。
         * @example `20`
         */
        MaxKeys: number;
        /**
         * 用于对Object名字进行分组的字符。所有名字包含指定的前缀且第一次出现Delimiter字符之间的Object作为一组元素CommonPrefixes。
         * @example `/`
         */
        Delimiter: string;
        /**
         * 指明是否已返回所有结果。
         * true：表示本次没有返回全部结果。
         * false：表示本次已返回全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 指明返回结果中编码使用的类型。如果请求的参数中指定了encoding-type，则表示对返回结果中的Delimiter、Marker、Prefix、NextMarker和Key这些元素进行编码。
         * @example `url`
         */
        EncodingType: string;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextKeyMarker元素，用于标明接下来请求的key-marker。
         * @example `def`
         */
        NextKeyMarker: string;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextVersionIdMarker元素，用于标明接下来请求的version-id-marker。
         * @example `CAEQMxiBgICbof2D0BYiIGRhZjgwMzJiMjA3MjQ0ODE5MWYxZDYwMzJlZjU1****`
         */
        NextVersionIdMarker: string;
        /**
         * 保存除删除标记以外的Object版本信息的列表。
         */
        Version: any[];
        /**
         * 保存删除标记信息的列表。
         */
        DeleteMarker: any[];
        /**
         * 如果请求中指定了delimiter参数，则OSS返回的响应中包含CommonPrefixes元素。该元素标明以delimiter结尾，并有共同前缀的Object名称的集合。
         */
        CommonPrefixes: any[];
    };
}
