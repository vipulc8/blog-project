import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../validation/signInSchema";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[28rem] shadow flex justify-center rounded-lg">
        <Card color="transparent" shadow={false} className="p-3">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                id="email"
                size="lg"
                label="Email"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              ) : null}
              <Input
                id="password"
                type="password"
                size="lg"
                label="Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.password}
                </span>
              ) : null}
            </div>

            <Button
              className="mt-6"
              color="deep-purple"
              fullWidth
              type="submit"
            >
              Sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-purple-500 transition-colors hover:text-blue-700"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;