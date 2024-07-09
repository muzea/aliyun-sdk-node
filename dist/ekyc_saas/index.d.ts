import { FaceRecognitionCompareRequest } from "./FaceRecognitionCompare/req";
import { FaceRecognitionCompareResponse } from "./FaceRecognitionCompare/res";
import { FaceToFaceCompareRequest } from "./FaceToFaceCompare/req";
import { FaceToFaceCompareResponse } from "./FaceToFaceCompare/res";
import { IdDetectionAndScanDocumentRequest } from "./IdDetectionAndScanDocument/req";
import { IdDetectionAndScanDocumentResponse } from "./IdDetectionAndScanDocument/res";
import { IdDetectOcrCompareFacesRequest } from "./IdDetectOcrCompareFaces/req";
import { IdDetectOcrCompareFacesResponse } from "./IdDetectOcrCompareFaces/res";
import { ScanDocumentRequest } from "./ScanDocument/req";
import { ScanDocumentResponse } from "./ScanDocument/res";
import { VerifyDocumentRequest } from "./VerifyDocument/req";
import { VerifyDocumentResponse } from "./VerifyDocument/res";

interface EKYC_SAAS {
    /**
     * 对比证件上的人像照片与上传的自拍照片是否是同一个人。
     */
    FaceRecognitionCompare(query: FaceRecognitionCompareRequest): Promise<FaceRecognitionCompareResponse>;
    /**
     * 对比两张人脸自拍照片是否是同一人。
     */
    FaceToFaceCompare(query: FaceToFaceCompareRequest): Promise<FaceToFaceCompareResponse>;
    /**
     * 包含证件类型检测、证件照片防伪识别、证件OCR服务。
     */
    IdDetectionAndScanDocument(query: IdDetectionAndScanDocumentRequest): Promise<IdDetectionAndScanDocumentResponse>;
    /**
     * 包含证件类型检测、卡证照片防伪识别、证件OCR、及人证比对服务。
     */
    IdDetectOcrCompareFaces(query: IdDetectOcrCompareFacesRequest): Promise<IdDetectOcrCompareFacesResponse>;
    /**
     * 提供多个国家的身份证/驾照/护照/居留证的OCR识别服务。
     */
    ScanDocument(query: ScanDocumentRequest): Promise<ScanDocumentResponse>;
    /**
     * 卡证类型检测及防伪服务接口。
     */
    VerifyDocument(query: VerifyDocumentRequest): Promise<VerifyDocumentResponse>;
}
export default EKYC_SAAS;
