import { AddFaceRequest } from "./AddFace/req";
import { AddFaceResponse } from "./AddFace/res";
import { DeleteFaceRequest } from "./DeleteFace/req";
import { DeleteFaceResponse } from "./DeleteFace/res";
import { DetectFaceRequest } from "./DetectFace/req";
import { DetectFaceResponse } from "./DetectFace/res";
import { GetFaceAttributeRequest } from "./GetFaceAttribute/req";
import { GetFaceAttributeResponse } from "./GetFaceAttribute/res";
import { ListFaceRequest } from "./ListFace/req";
import { ListFaceResponse } from "./ListFace/res";
import { ListGroupRequest } from "./ListGroup/req";
import { ListGroupResponse } from "./ListGroup/res";
import { RecognizeFaceRequest } from "./RecognizeFace/req";
import { RecognizeFaceResponse } from "./RecognizeFace/res";
import { VerifyFaceRequest } from "./VerifyFace/req";
import { VerifyFaceResponse } from "./VerifyFace/res";

interface FACE {
    AddFace(query: AddFaceRequest): Promise<AddFaceResponse>;
    DeleteFace(query: DeleteFaceRequest): Promise<DeleteFaceResponse>;
    DetectFace(query: DetectFaceRequest): Promise<DetectFaceResponse>;
    GetFaceAttribute(query: GetFaceAttributeRequest): Promise<GetFaceAttributeResponse>;
    ListFace(query: ListFaceRequest): Promise<ListFaceResponse>;
    ListGroup(query: ListGroupRequest): Promise<ListGroupResponse>;
    RecognizeFace(query: RecognizeFaceRequest): Promise<RecognizeFaceResponse>;
    VerifyFace(query: VerifyFaceRequest): Promise<VerifyFaceResponse>;
}
export default FACE;
