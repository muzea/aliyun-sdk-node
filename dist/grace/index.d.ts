import { UploadFileByURLRequest } from "./UploadFileByURL/req";
import { UploadFileByURLResponse } from "./UploadFileByURL/res";
import { GetFileRequest } from "./GetFile/req";
import { GetFileResponse } from "./GetFile/res";
import { UploadFileByOSSRequest } from "./UploadFileByOSS/req";
import { UploadFileByOSSResponse } from "./UploadFileByOSS/res";
import { AnalyzeFileRequest } from "./AnalyzeFile/req";
import { AnalyzeFileResponse } from "./AnalyzeFile/res";

interface GRACE {
    /**
     * 通过URL上传文件
     */
    UploadFileByURL(query: UploadFileByURLRequest): Promise<UploadFileByURLResponse>;
    /**
     * 获取文件信息。
     */
    GetFile(query: GetFileRequest): Promise<GetFileResponse>;
    /**
     * 通过OSS上传文件到ATP平台。
     */
    UploadFileByOSS(query: UploadFileByOSSRequest): Promise<UploadFileByOSSResponse>;
    /**
     * 分析文件。
     */
    AnalyzeFile(query: AnalyzeFileRequest): Promise<AnalyzeFileResponse>;
}
export default GRACE;
