import { NextRequest, NextResponse } from "next/server";


const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("home", request.url));
};
export const config ={
    matcher:"/"
}
export default middleware;
