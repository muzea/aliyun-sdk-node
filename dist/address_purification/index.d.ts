import { CorrectAddressRequest } from "./CorrectAddress/req";
import { CorrectAddressResponse } from "./CorrectAddress/res";
import { ExtractAddressRequest } from "./ExtractAddress/req";
import { ExtractAddressResponse } from "./ExtractAddress/res";
import { ExtractNameRequest } from "./ExtractName/req";
import { ExtractNameResponse } from "./ExtractName/res";
import { ExtractPhoneRequest } from "./ExtractPhone/req";
import { ExtractPhoneResponse } from "./ExtractPhone/res";
import { GetAddressDivisionCodeRequest } from "./GetAddressDivisionCode/req";
import { GetAddressDivisionCodeResponse } from "./GetAddressDivisionCode/res";
import { GetAddressSimilarityRequest } from "./GetAddressSimilarity/req";
import { GetAddressSimilarityResponse } from "./GetAddressSimilarity/res";
import { GetZipcodeRequest } from "./GetZipcode/req";
import { GetZipcodeResponse } from "./GetZipcode/res";
import { StructureAddressRequest } from "./StructureAddress/req";
import { StructureAddressResponse } from "./StructureAddress/res";

interface ADDRESS_PURIFICATION {
    /**
     * 对用户输入错误文本地址进行纠错。
     */
    CorrectAddress(query: CorrectAddressRequest): Promise<CorrectAddressResponse>;
    /**
     * 从非结构化文本中抽取地址片段。
     */
    ExtractAddress(query: ExtractAddressRequest): Promise<ExtractAddressResponse>;
    /**
     * 从自然文本中抽取姓名片段。
     */
    ExtractName(query: ExtractNameRequest): Promise<ExtractNameResponse>;
    /**
     * 从自然文本中抽取电话号码片段。
     */
    ExtractPhone(query: ExtractPhoneRequest): Promise<ExtractPhoneResponse>;
    /**
     * 识别输入地址文本中的省、市、区(县)、街道(镇)四级区划。
     */
    GetAddressDivisionCode(query: GetAddressDivisionCodeRequest): Promise<GetAddressDivisionCodeResponse>;
    /**
     * 判定两个地址是否为同一地址，并给出最细粒度的相同地址级别。
     */
    GetAddressSimilarity(query: GetAddressSimilarityRequest): Promise<GetAddressSimilarityResponse>;
    /**
     * 输入地址，输出地址所对应的邮政编码。
     */
    GetZipcode(query: GetZipcodeRequest): Promise<GetZipcodeResponse>;
    /**
     * 针对原始地址进行分级，同时支持省、市、区、街道补全。
     */
    StructureAddress(query: StructureAddressRequest): Promise<StructureAddressResponse>;
}
export default ADDRESS_PURIFICATION;
