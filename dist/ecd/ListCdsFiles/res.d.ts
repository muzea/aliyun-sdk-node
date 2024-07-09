export interface ListCdsFilesResponse {
    /**
     * 下一个查询开始的Token，`NextToken`为空表示没有下一个。
     * @example `aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
    `
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `40D86754-20FD-53DC-A9B8-25F7FECC****`
     */
    RequestId: string;
    /**
     * 文件列表条目总数量。
     * @example `2`
     */
    Count: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件列表。
     */
    FileModels: {
        /**
         * 文件内容类型。
         * @example `application/json`
         */
        ContentType: string;
        /**
         * 文件类型。
         * @example `file`
         */
        FileType: string;
        /**
         * 文件的后缀名。
         * @example `pdf`
         */
        FileExtension: string;
        /**
         * 文件ID。
         * @example `637725ff2f63db8470984e6c92c692b87d52****`
         */
        FileId: string;
        /**
         * 文件的创建者。
         * @example `demo_user01@cn-shanghai.148875033399****`
         */
        Creator: string;
        /**
         * 最近一次打开文件的时间。
         * @example `2022-09-06T07:27:08Z`
         */
        OpenTime: string;
        /**
         * 父文件夹ID。
         * @example `3343213ff2f63db8470984e6c92c3213dfdw****
        `
         */
        ParentId: string;
        /**
         * 修改者。
         * @example `demo_user02@cn-shanghai.148875033399****`
         */
        Modifier: string;
        /**
         * 文件描述。
         * @example `test1`
         */
        Description: string;
        /**
         * 文件名称。
         * @example `SampleFile.pdf`
         */
        Name: string;
        /**
         * 下载链接，默认有效时间是15分钟。
         * @example `https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899ef****?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
         */
        DownloadUrl: string;
        /**
         * 数据文件的SHA1哈希值。
         * @example `EA4942AA8761213890A5C386F88E6464D2C3****`
         */
        Sha1: string;
        /**
         * 最后一次打开文件的时间戳。
         * @example `168951245231`
         */
        OpenTimeStamp: number;
        /**
         * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 文件路径。
         * @example `isv/1019236948660053/temp/`
         */
        FilePath: string;
        /**
         * 文件大小。单位：Byte（字节）。
         * @example `102400`
         */
        Size: number;
        /**
         * 文件类型分类。网盘会根据文件的后缀名和MIME Type对文件进行分了分类，主要分类有`doc`、`image`、`audio`、`video`。
         * @example `image`
         */
        Category: string;
        /**
         * 文件MD5值。
         * @example `63c83ececb4e6926c51448fc5ecb****`
         */
        Md5: string;
        /**
         * 缩略图地址。
         * @example `https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899ef****?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
         */
        Thumbnail: string;
        /**
         * 创建时间。
         * @example `2022-09-06T07:27:08Z`
         */
        CreateTime: string;
        /**
         * 最后一次修改文件的时间。
         * @example `2022-09-06T07:27:08Z`
         */
        ModifiedTime: string;
    }[];
}
