export interface UpdateUdfFileRequest {
    /**
     * 函数文件所在文件夹的路径。
     * @example `业务流程/第一个业务流程/函数/字符串处理函数`
     */
    "FileFolderPath"?: string;
    /**
     * DataWorks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 函数的分类，对应创建函数表单中的函数类型，包括MATH（数学运算函数）、AGGREGATE（聚合函数）、STRING（字符串处理函数）、DATE（日期处理函数）、ANALYTIC（窗口函数）和OTHER（其他函数）。
     * @example `STRING`
     */
    "FunctionType": string;
    /**
     * 函数定义所在的类名，对应创建函数表单的类名。
     * @example `com.alibaba.DataWorks.api.udf.StringConcat`
     */
    "ClassName": string;
    /**
     * 函数引用的资源名列表，使用英文逗号（,）分隔，对应创建函数表单中的资源列表。
     * @example `string-concat-1.0.0.jar,commons-lang-2.6.jar`
     */
    "Resources": string;
    /**
     * 函数用途的说明，对应创建函数表单中的描述。
     * @example `把几个字符串连接起来生成一个新的字符串`
     */
    "UdfDescription"?: string;
    /**
     * 函数的调用命令格式，对应创建函数表单中的命令格式。
     * @example `StringConcat(String... substrs)`
     */
    "CmdDescription"?: string;
    /**
     * 函数入参的说明，对应创建函数表单中的参数说明。
     * @example `需要连接的字符串列表`
     */
    "ParameterDescription"?: string;
    /**
     * 函数的返回值说明，对应创建函数表单中的返回值。
     * @example `所有字符串按照输入顺序前后连接生成的新字符串`
     */
    "ReturnValue"?: string;
    /**
     * 函数的调用示例，对应创建函数表单中的示例。
     * @example `StringConcat('a', 'b', 'c')`
     */
    "Example"?: string;
    /**
     * DataWorks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。
     * 该参数与ProjectId参数二者必须设置其一，以确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 文件的ID。
     * @example `10000001`
     */
    "FileId": string;
}
