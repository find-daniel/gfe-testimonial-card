import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* Card Container */}
      <div className="w-[340px] border border-solid rounded-lg  mt-[200px] p-6 bg-white shadow-sm">
        {/* Card Header */}
        <div className="flex mb-4">
          {/* Profile Photo */}
          <Image
            className="mr-4"
            src="/profile-thumbnail.png"
            height={48}
            width={48}
            alt="user profile photo"
          />
          {/* Profile Info container */}
          <div>
            {/* Name */}
            <p className="text-lg font-semibold text-neutral-900">Sarah Dole</p>
            {/* Handle */}
            <p className="text-sm font-normal text-neutral-600">@sarahdole</p>
          </div>
        </div>
        {/* Card Content */}
        <p className="text-base font-normal text-neutral-600">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>

      {/* <!-- Attribute this challenge to yourself! --> */}
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          &nbsp; GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/username"
          target="_blank"
        >
          &nbsp; danieo
        </a>
        .
      </div>
    </main>
  );
}
