export interface ListObjectsV2Request {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 对Object名字进行分组的字符。所有Object名字包含指定的前缀，第一次出现Delimiter字符之间的Object作为一组元素（即CommonPrefixes）。
     * @example `/`
     */
    "delimiter"?: string;
    /**
     * 指定返回Object的最大数。<br>取值：大于0小于1000 <br>默认值：100
     * > 如果因为Max-keys的设定无法一次完成列举，返回结果会附加一个<NextContinuationToken>作为下一次列举的Continuation-token。
     * @example `100`
     */
    "max-keys"?: number;
    /**
     * 限定返回文件的Key必须以Prefix作为前缀。<br>
     * - 参数的长度必须小于1024字节。
     * - 使用Prefix查询时，返回的Key中仍会包含Prefix。
     * 如果把Prefix设为某个文件夹名，则列举以此Prefix开头的文件，即该文件夹下递归的所有文件和子文件夹。<br>
     * 在设置Prefix的基础上，将Delimiter设置为正斜线（/）时，返回值就只列举该文件夹下的文件，文件夹下的子文件夹名返回在CommonPrefixes中，子文件夹下递归的所有文件和文件夹不显示。<br>
     * 例如，一个Bucket中有三个Object ，分别为fun/test.jpg、 fun/movie/001.avi和fun/movie/007.avi。若设定Prefix为fun/，则返回三个Object；如果在Prefix设置为fun/的基础上，将Delimiter设置为正斜线（/），则返回fun/test.jpg和fun/movie/。
     * @example `a`
     */
    "prefix"?: string;
    /**
     * 对返回的内容进行编码并指定编码的类型。
     * >  Delimiter、Start-after、Prefix、NextContinuationToken以及Key使用UTF-8字符。如果Delimiter、Start-after、Prefix、NextContinuationToken以及Key中包含XML 1.0标准不支持的控制字符，您可以通过指定Encoding-type对返回结果中的Delimiter、Start-after、Prefix、NextContinuationToken以及Key进行编码。
     */
    "encoding-type"?: any;
    /**
     * 指定是否在返回结果中包含owner信息。可选值如下：
     * - true：表示返回结果中包含owner信息。
     * - false：表示返回结果中不包含owner信息。
     * @example `true`
     */
    "fetch-owner"?: boolean;
    /**
     * 设定从Start-after之后按字母排序开始返回Object。<br>
     * Start-after用来实现分页显示效果，参数的长度必须小于1024字节。
     * <br>做条件查询时，即使Start-after在列表中不存在，也会从符合Start-after字母排序的下一个开始打印。
     * @example `b`
     */
    "start-after"?: string;
    /**
     * 指定list操作需要从此token开始。您可从ListObjectsV2结果中的NextContinuationToken获取此token。
     * @example `test1.txt`
     */
    "continuation-token"?: string;
}
