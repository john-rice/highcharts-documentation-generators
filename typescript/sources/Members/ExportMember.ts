/*!*
 *
 *  Copyright (C) Highsoft AS
 *
 * */

import * as M from './Member';
import TS from 'typescript';

export class ExportMember
    extends M.Member<(TS.ExportAssignment|TS.ExportDeclaration)>
{

    /* *
     *
     *  Functions
     *
     * */

    public toJSON(): ExportMemberJSON {

        const superJSON = super.toJSON();

        return {
            children: superJSON.children,
            kind: 'export',
            kindID: superJSON.kindID
        }
    }
}

export interface ExportMemberJSON extends M.MemberJSON {
    kind: 'export'
}

export default ExportMember;
