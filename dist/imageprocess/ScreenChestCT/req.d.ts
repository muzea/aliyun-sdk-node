export interface ScreenChestCTRequest {
    /**
     * 图片的格式。目前仅支持DICOM。
     * @example `DICOM`
     */
    "DataFormat": string;
    /**
     * 数据来源机构名称。
     * @example `weiyi`
     */
    "OrgName": string;
    /**
     * 数据来源机构代码。
     * @example `7ff51bfe-e73d-11ea-827d-506b4b3f3cf6`
     */
    "OrgId": string;
    /**
     * DICOM序列的地址列表。
     */
    "URLList": {
        /**
         * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > URLList.N.URL中的N为该图像URL在当前List中的顺序（从1开始）。当直接使用API请求时，输入URLList的填充会以URLList.1.URL=url1，URLList.2.URL=url2，......的方式指定参数和参数值，参数对以&连接，其中url1、url2、......等具体值请根据实际情况进行替换；当使用SDK填充URLList时，可直接使用SDK提供的相应的方法。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/xxx/001.dcm`
         */
        URL: string;
    }[];
    /**
     * 该值控制输出算法输出的种类。十进制数。
     * - bit位值为1，代表启用对应的算法。
     * - bit位值为0，代表禁用对应的算法。
     * 例如Mask=3，二进制为00011，即调用**新冠病毒肺炎辅助诊断**和**冠脉钙化积分测算**两个算法；如果Mask=11，二进制为01011，即调用**新冠病毒肺炎辅助诊断**、**冠脉钙化积分测算**和**肋骨骨折检测**三个算法。系统仅识别二进制后五位的值，如果Mask=32，二进制为100000，后五位均为0，系统将无法识别对应算法，提示报错；如果Mask=33，二进制为100001，后五位为00001，即调用**新冠病毒肺炎辅助诊断**一个算法。具体对应关系请参见下表**算法启用与Mask值对应关系**。
     * @example `4`
     */
    "Mask"?: number;
    /**
     * 是否在返回参数中输出相关字段，取值0、1和2，默认为0。
     * - 0：表示在获取算法结果时不返回输入DICOM文件的URL列表，不输出**URLList**和**NestedUrlList**字段。如果没有输入该字段，默认为0。
     * - 1：表示在获取算法结果时返回输入的DICOM文件的URL列表，默认以单序列格式输出，输出**URLList**字段。格式为：
     *     ```
     * {
     * "URLList":["url","url",...]
     * }
     *     ```
     * - 2：表示在获取算法结果时返回输入的DICOM文件的URL列表，默认以多序列格式输出，输出**NestedUrlList**字段。格式为：
     *     ```
     * {
     * "NestedUrlList":
     *   {
     *   "序列Id1":["url","url",...] ,
     *   "序列Id2":["url","url",...]
     *    }
     * }
     *   ```
     * > 当输入的**Verbose**为**1**，但提交的DICOM数据为多序列时，默认以**Verbose**为**2**的形式输出。
     * @example `0`
     */
    "Verbose"?: number;
}
